package com.example.craft.model;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Invoices")
public class Invoice {
    
    @Id
    @GeneratedValue
    private Integer invoiceID;
    private String nameOfClient;
    private String desc;
    private String invoiceDate;
    private String invoiceStatus;
    private Double invoiceAmount;

    public Integer getInvoiceID() {
        return invoiceID;
    }
    public void setInvoiceID(Integer invoiceID) {
        this.invoiceID = invoiceID;
    }
    public String getNameOfClient() {
        return nameOfClient;
    }
    public void setNameOfClient(String nameOfClient) {
        this.nameOfClient = nameOfClient;
    }
    public String getDesc() {
        return desc;
    }
    public void setDesc(String desc) {
        this.desc = desc;
    }
    public String getInvoiceDate() {
        return invoiceDate;
    }
    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }
    public String getInvoiceStatus() {
        return invoiceStatus;
    }
    public void setInvoiceStatus(String invoiceStatus) {
        this.invoiceStatus = invoiceStatus;
    }
    public Double getInvoiceAmount() {
        return invoiceAmount;
    }
    public void setInvoiceAmount(Double invoiceAmount) {
        this.invoiceAmount = invoiceAmount;
    }

}
