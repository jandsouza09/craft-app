package com.example.craft;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class LoadData implements CommandLineRunner {
    
    @Autowired
    private LoadDataService loadDataService;

    @Override
    public void run(String... args) throws Exception {
        loadDataService.loadDataFromCsv("backend/craft/src/main/resources/transactions.csv");
    }
}
