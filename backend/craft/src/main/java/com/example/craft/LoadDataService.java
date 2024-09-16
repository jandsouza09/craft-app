package com.example.craft;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.io.Reader;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.craft.model.Transaction;
import com.example.craft.model.TransactionRepository;

@Service
public class LoadDataService {
    
    @Autowired
    private TransactionRepository transactionRepository;

    private LoadDataService(TransactionRepository repository) {
        this.transactionRepository = repository;
    }

    public void loadDataFromCsv(String filepath) throws IOException {
        List<Transaction> transactions = new ArrayList<>();

        try (Reader reader = new FileReader(filepath)) {
            CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withHeader());
            for (CSVRecord record : csvParser) {
                Transaction transaction = new Transaction();
                transaction.setId(Integer.parseInt(record.get("id")));
                transaction.setTransactionDate(record.get("transactionDate"));
                transaction.setAmount(Double.parseDouble(record.get("amount")));
                transactions.add(transaction);
            }
        }
        transactionRepository.saveAll(transactions);
    }
}
