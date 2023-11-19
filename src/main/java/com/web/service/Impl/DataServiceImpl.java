package com.web.service.Impl;

import com.web.service.DataService;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;

@Service
public class DataServiceImpl implements DataService {
    @Override
    public float[][] dataLoad(String path) throws IOException {
        InputStream is = Thread.currentThread().getContextClassLoader()
                .getResourceAsStream(path);
        XSSFWorkbook workbook = new XSSFWorkbook(is);

        //读取Sheet
        Sheet sheet = workbook.getSheetAt(0);
        Row row = sheet.getRow(0);
        float[][] data = new float[8][3600];


        //获取最大行数
        int rownum = sheet.getPhysicalNumberOfRows();
        //获取最大列数
        int colnum = row.getPhysicalNumberOfCells();

        for (int j = 0; j < colnum; j++) {
            for (int i = 1; i < rownum; i++) {
                //获取第i行数据
                row = sheet.getRow(i);
                Cell cell = row.getCell(j);
                cell.setCellType(CellType.NUMERIC);
                data[j][i - 1] = (float) cell.getNumericCellValue();
//                System.out.print(cellnum + "\t");

            }
            System.out.println(Arrays.toString(data[j]));
        }
        System.out.print(data);
        return data;
    }
}
