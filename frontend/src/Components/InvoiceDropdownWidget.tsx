import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react";

export type InvoiceType = {
  id: number;
  nameOfClient: string;
  invoiceDate: string;
  amount: number;
  status: string;
}

export type TransactionType = {
  id: number;
  nameOfClient: string;
  transactionDate: string;
  amount: number;
}

export const InvoiceDropdownWidget = (props: { invoiceList: InvoiceType[], currentInvoice: number, setCurrentInvoice: (invoice: number) => void }) => {

    return (
      <>
      <InputLabel>Select an Invoice</InputLabel>
      <FormControl sx={{width: 400}}>
        <Select
          value={props.currentInvoice}
          defaultValue={props.currentInvoice}
          onChange={(e) => props.setCurrentInvoice(e.target.value as number)}
        >
          {props.invoiceList.map((invoice) => {
            return (
              <MenuItem key={invoice.id} value={invoice.id}>{invoice.nameOfClient}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      </>
    )
}