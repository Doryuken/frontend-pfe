import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { Cell } from 'ng2-smart-table';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  generateExcel(titles, data, date, groupe, module, groupeEtudiant){
  const header = titles;

  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('Seance');
  let titleRow = worksheet.addRow(['Les informations de la séance :']);
  titleRow.font = { name: 'Cambria', family: 4, size: 13,  bold: true };
  worksheet.addRow([]);
  let dateRow = worksheet.addRow(['Date : ' + date]);
  dateRow.font =  { name: 'Cambria', family: 4, size: 12,  bold: false };
  let moduleRow =  worksheet.addRow(['Module : ' + module]);
  moduleRow.font = { name: 'Cambria', family: 4, size: 12,  bold: false };
  let groupeRow = worksheet.addRow(['Groupe : ' + groupe]);
  groupeRow.font = { name: 'Cambria', family: 4, size: 12,  bold: false };
  worksheet.addRow([]);
  let presentRow = worksheet.addRow(['La liste des étudiants : ']);
  presentRow.font = { name: 'Cambria', family: 4, size: 14, bold: true };
  worksheet.addRow([]);

     //Add Header Row
   let headerRow = worksheet.addRow(header);

// Cell Style : Fill and Border 
  headerRow.eachCell((cell, number) => {
      cell.fill = {
       type: 'pattern',
       pattern: 'solid',
       fgColor: { argb: 'FFFFFF00' },
       bgColor: { argb: 'FF0000FF' }
       }
       cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    });
   
        groupeEtudiant.forEach(d => { let row = worksheet.addRow([d.Matricule,d.Nom,d.Prenom,d.BirthDate]);   
        row.eachCell((cell,number) => {
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        if(!data.find(e =>  e.Matricule === d.Matricule )){
             cell.fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'FFFF0000' },
              bgColor: { argb: 'FF0000FF' }
              }
          }
        })
         
    });

    worksheet.columns.forEach(column => {
      column.width = 30;
    })

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, `${module}-${groupe}-${date}.xlsx`);
        });

  }

  generateExcelAll(groupe, seance){
    let data : etudiantModel[] = [];
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Seance');
    let titleRow = worksheet.addRow(['Enseignant : ' + seance[0].enseignant.Nom + ' ' + seance[0].enseignant.Prenom]);
    titleRow.font = { name: 'Cambria', family: 4, size: 13,  bold: true };
    worksheet.addRow([]);
    let moduleRow =  worksheet.addRow(['Module : ' + seance[0].module.Nom]);
    moduleRow.font = { name: 'Cambria', family: 4, size: 12,  bold: false };
    let groupeRow = worksheet.addRow(['Groupe : ' + seance[0].groupe.Nom]);
    groupeRow.font = { name: 'Cambria', family: 4, size: 12,  bold: false };
    let seanceRow = worksheet.addRow(['Nombre des séances : ' + seance.length]);
    seanceRow.font = { name: 'Cambria', family: 4, size: 12,  bold: false };
    worksheet.addRow([]);

    let presentRow = worksheet.addRow(['La liste des étudiants : ']);
    presentRow.font = { name: 'Cambria', family: 4, size: 14, bold: true };
    worksheet.addRow([]);
    

    
    let headerRow = worksheet.addRow(['Matricule','Nom','Prenom','Date de naissance','Présences', 'Absences']);
    headerRow.eachCell((cell, number) => {
        cell.fill = {
         type: 'pattern',
         pattern: 'solid',
         fgColor: { argb: 'FFFFFF00' },
         bgColor: { argb: 'FF0000FF' }
         }
         cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
      });
     

      groupe.etudiants.forEach(elem => {
        data.push(elem);
        const index = data.indexOf(elem)
        data[index].Presence = 0; 
        data[index].Absence = 0; 
        seance.forEach(seance => {
          if(seance.etudiants.find(e => e.Matricule == elem.Matricule))
          data[index].Presence = data[index].Presence + 1;
          else data[index].Absence = data[index].Absence + 1;  
        })
          });
        
      data.forEach(d => { 
        let row = worksheet.addRow([d.Matricule,d.Nom,d.Prenom,d.BirthDate,d.Presence,d.Absence]);
        row.eachCell((cell,number) => 
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } });
             
      })    
    
      worksheet.columns.forEach(column => {
        column.width = 30;
      })
  
      workbook.xlsx.writeBuffer().then((data) => {
        let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        fs.saveAs(blob, `${seance[0].module.Nom}-${seance[0].groupe.Nom}.xlsx`);
          });
  
    }
  
}

interface etudiantModel {
  id : string,
  Nom: string,
  Prenom: string,
  Matricule: number,
  BirthDate: string,
  Presence : number,
  Absence : number
}