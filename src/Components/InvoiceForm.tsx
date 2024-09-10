import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { InvoiceDropdownWidget, InvoiceType } from "./InvoiceDropdownWidget"
import { useEffect, useMemo, useState } from "react";

export const InvoiceForm = (props: { invoiceData: InvoiceType[] }) => {
  const [currentInvoice, setCurrentInvoice] = useState<number>(1);
  const currentInvoiceData = useMemo(() => props.invoiceData.find((invoice) => invoice.id === currentInvoice), [props.invoiceData, currentInvoice]);
  const [nameOfClient, setNameOfClient] = useState<string>(currentInvoiceData?.nameOfClient || '');
  const [amount, setAmount] = useState<number>(currentInvoiceData?.amount || 0);
  const [creationDate, setCreationDate] = useState<string>(currentInvoiceData?.invoiceDate || '');

  useEffect(() => {
    if (currentInvoiceData) {
      setNameOfClient(currentInvoiceData.nameOfClient);
      setAmount(currentInvoiceData.amount);
      setCreationDate(currentInvoiceData.invoiceDate);
    }
  },[currentInvoiceData]);

  return (
    <>
      <div style={{marginBottom: 20}}>
      <InputLabel>Select an Invoice</InputLabel>
      <FormControl sx={{width: 400}}>
        <Select
          value={currentInvoice}
          defaultValue={currentInvoice}
          onChange={(e) => setCurrentInvoice(e.target.value as number)}
        >
          {props.invoiceData.map((invoice) => {
            return (
              <MenuItem key={invoice.id} value={invoice.id}>{invoice.nameOfClient}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      </div>
    <FormControl>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField id="nameOfClient" label="Name of Client" variant="outlined" value={nameOfClient} onChange={(e) => setNameOfClient(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField id="amount" label="Amount" variant="outlined" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
        </Grid>
        <Grid item>
          <TextField id="creationDate" label="Creation Date" variant="outlined" value={creationDate} onChange={(e) => setCreationDate(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField id="status" label="Status" variant="outlined" disabled />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
              Save
          </Button>
        </Grid>
      </Grid>
    </FormControl></>
  )
}