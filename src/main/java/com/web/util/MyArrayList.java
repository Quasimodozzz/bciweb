package com.web.util;

import java.util.Comparator;

public class MyArrayList<T> {
    private int size;
    private int capacity;
    private T [] array;
    public MyArrayList (){
        this.size = 0;
        this.capacity = 10;
        this.array = (T[])new Object[capacity];
    }
    public MyArrayList(int capacity){
        this.size = 0;
        this.capacity = capacity;
        this.array = (T[])new Object[capacity];
    }
    public void add(T element) {
        if(size==capacity) throw new RuntimeException("exception");
        array[size] = element;
        size++;
    }
    public void sort(Comparator<T> comparator){
        for (int i = 0; i < size; i++) {
            for (int j = i+1; j < size; j++) {
                if(comparator.compare(array[i],array[j])>0){

                }else if (comparator.compare(array[i],array[j])<0)
            }
        }
    }
}
