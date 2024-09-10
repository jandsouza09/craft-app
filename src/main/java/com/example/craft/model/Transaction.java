package com.example.craft.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Transactions")
public class Transaction {

    @Id
    private Integer transactionID;

    private String transactionDate;
    private Double transactionAmount;
    
    public Integer getId() {
        return transactionID;
    }
    public void setId(Integer transactionID) {
        this.transactionID = transactionID;
    }
    public String getTransactionDate() {
        return transactionDate;
    }
    public void setTransactionDate(String transactionDate) {
        this.transactionDate = transactionDate;
    }
    public Double getAmount() {
        return transactionAmount;
    }
    public void setAmount(Double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    
}