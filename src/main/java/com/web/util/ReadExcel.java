package com.web.util;

import org.apache.poi.ss.formula.functions.Column;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Arrays;

public class ReadExcel {
    public static void main(String[] args) throws IOException {
        FileInputStream is = new FileInputStream("src/main/resources/data/原始信号.xlsx");
        XSSFWorkbook workbook = new XSSFWorkbook(is);
        //读取Sheet
        Sheet sheet = workbook.getSheetAt(0);
        Row row = sheet.getRow(0);
        float[][] data = new float[8][3601];



        //获取最大行数
        int rownum = sheet.getPhysicalNumberOfRows();
        //获取最大列数
        int colnum = row.getPhysicalNumberOfCells();
//        for (int i = 0; i < rownum; i++) {
//            //获取第i行数据
//            row = sheet.getRow(i);
//            for (int j = 0; j < colnum; j++) {
//                Cell cell = row.getCell(j);
//                cell.setCellType(CellType.STRING);
//                String cellText = cell.getStringCellValue();
//                System.out.print(cellText + "\t");
//            }
//            System.out.println();
//        }
        for (int j=0;j<colnum;j++){
            for (int i = 1; i < rownum; i++) {
                //获取第i行数据
                row = sheet.getRow(i);
                Cell cell = row.getCell(j);
                cell.setCellType(CellType.NUMERIC);
                data[j][i-1]= (float) cell.getNumericCellValue();
//                System.out.print(cellnum + "\t");

                }
            System.out.println(Arrays.toString(data[j]));
        }

    }
}


