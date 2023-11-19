package com.web.Controller;

import com.web.mapper.UserMapper;
import com.web.service.DataService;
import lombok.SneakyThrows;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Objects;

//用于动态绘图的接口
@CrossOrigin//跨域注解
@RestController
public class DataController {

    @Autowired
    DataService dataService;

    @SneakyThrows
    @RequestMapping("/raw")    //原始信号
    public float[][] rawdata(){
        return dataService.dataLoad("static/signaldata/原始信号.xlsx");
//        //读取excal
//        InputStream is = Thread.currentThread().getContextClassLoader()
//                .getResourceAsStream("static/signaldata/原始信号.xlsx");
//        XSSFWorkbook workbook = new XSSFWorkbook(is);
//
//        //读取Sheet
//        Sheet sheet = workbook.getSheetAt(0);
//        Row row = sheet.getRow(0);
//        float[][] data = new float[8][3600];
//
//
//        //获取最大行数
//        int rownum = sheet.getPhysicalNumberOfRows();
//        //获取最大列数
//        int colnum = row.getPhysicalNumberOfCells();

//        for (int j = 0; j < colnum; j++) {
//            for (int i = 1; i < rownum; i++) {
//                //获取第i行数据
//                row = sheet.getRow(i);
//                Cell cell = row.getCell(j);
//                cell.setCellType(CellType.NUMERIC);
//                data[j][i - 1] = (float) cell.getNumericCellValue();
////                System.out.print(cellnum + "\t");
//
//            }
//            System.out.println(Arrays.toString(data[j]));
//        }
//        System.out.print(data);
//        return data;

    }

    @SneakyThrows
    @RequestMapping("/artifact")
    public float[][] artifact() {
        return dataService.dataLoad("static/signaldata/原始信号+伪迹去除.xlsx");
    }

    @SneakyThrows
    @RequestMapping("/baseline")
    public float[][] baseline() {
        return dataService.dataLoad("static/signaldata/原始信号+伪迹去除+基线矫正.xlsx");
    }

    @SneakyThrows
    @RequestMapping("/filter")
    public float[][] filter() {
        return dataService.dataLoad("src/main/resources/data/原始信号+伪迹去除+基线矫正+滤波.xlsx");
    }

}
