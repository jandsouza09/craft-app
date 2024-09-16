import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { InvoiceType, TransactionType } from "./InvoiceDropdownWidget";

export const InvoiceList = (props: { invoiceList: InvoiceType[], transactionList: TransactionType[] }) => {
    
    const tableRows = props.invoiceList.map((invoice) => {
        const findTransaction = props.transactionList.find((transaction) => transaction.id === invoice.id);
        const invoiceStatus = findTransaction ? findTransaction.amount === invoice.amount && findTransaction.transactionDate >= invoice.invoiceDate ? 'paid' : 'unpaid' : 'unpaid';
        return {
            id: invoice.id,
            nameOfClient: invoice.nameOfClient,
            invoiceDate: invoice.invoiceDate,
            amount: invoice.amount,
            status: invoiceStatus
        }
    });

    const tableColumns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nameOfClient', headerName: 'Client', width: 130 },
        { field: 'invoiceDate', headerName: 'Invoice Date', width: 130 },
        { field: 'amount', headerName: 'Amount', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 }
    ];

    return (
        <DataGrid rows={tableRows} columns={tableColumns} />
    )
}