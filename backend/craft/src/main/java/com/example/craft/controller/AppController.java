package com.example.craft.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.craft.model.Invoice;
import com.example.craft.model.InvoiceRepository;
import com.example.craft.model.Transaction;
import com.example.craft.model.TransactionRepository;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AppController {
    
    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private InvoiceRepository invoiceRepository;

    @GetMapping("/transactions")
    private List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @GetMapping("/invoices")
    private List<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    @GetMapping("/invoice/{invoiceID}")
    private Optional<Invoice> getInvoice(@PathVariable String invoiceID) {
        return invoiceRepository.findById(invoiceID);
    }

    @PostMapping("/invoice/addInvoice")
    private ResponseEntity<Invoice> addInvoice(@RequestBody Invoice invoiceData) {
        Invoice newInvoice = new Invoice();
        newInvoice.setNameOfClient(invoiceData.getNameOfClient());
        newInvoice.setDesc(invoiceData.getDesc());
        newInvoice.setInvoiceAmount(invoiceData.getInvoiceAmount());
        newInvoice.setInvoiceDate(invoiceData.getInvoiceDate());
        newInvoice.setInvoiceStatus(invoiceData.getInvoiceStatus()); 
        return new ResponseEntity<Invoice>(newInvoice, HttpStatus.OK);
    }
}
