import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import { useMemo, useState } from "react";
import { InvoiceType, TransactionType } from "./InvoiceDropdownWidget";

const THRESHOLD = 1000;

export const SummaryWidget = (props: { loading?: boolean, transactionData: TransactionType[] ,invoiceData: InvoiceType[] }) => {

    const isDataAvailable = useMemo(() => {
        return !props.loading && props.transactionData.length > 0;
    },[props.transactionData]);

    const totalAmount = useMemo(() => {
        if (!isDataAvailable) {
            return 0;
        }
        return props.transactionData.reduce((acc, transaction) => {
            return acc + transaction.amount;
        }, 0);
    },[props.transactionData]);

    const totalInvoices = useMemo(() => {
        return props.invoiceData.length;
    },[props.invoiceData]);

    const amountColor = totalAmount > THRESHOLD ? 'green' : totalAmount < THRESHOLD && totalAmount > 0 ? 'blue' : 'red';

    return (
        <div>
            {props.loading ? <div>Loading...</div> :
            isDataAvailable ? 
            <>
            <CardContent style={{display: 'flex', justifyContent: 'space-between', width: 300, border: 'solid', borderColor: 'blue'}}>
                <div>
                    <Typography variant="h5" component="div">Total Amount</Typography>
                    <Typography variant="h6" component="div" sx={{color: amountColor}}>{totalAmount.toFixed(2)}</Typography>
                </div>
                <div>
                    <Typography variant="h5" component="div"># of Invoices</Typography>
                    <Typography variant="h6" component="div">{totalInvoices}</Typography>
                </div>
            </CardContent>
            </> : <div>No data available</div>}
        </div>
    )
}