import { Tab, Tabs } from "@mui/material"
import { InvoiceDropdownWidget, TransactionType } from "./Components/InvoiceDropdownWidget"
import { InvoiceForm } from "./Components/InvoiceForm"
import { InvoiceList } from "./Components/InvoiceList"
import { SummaryWidget } from "./Components/SummaryWidget"
import { useEffect, useState } from "react"
import useFetch, { CachePolicies } from "use-http"
import { useFetchData } from "./Components/fetchData"

export const MainApp = () => {
  const [tab, setTab] = useState(1);
  const [transactionData, setTransactionData] = useState<TransactionType[]>([]);
  const [invoiceData, setInvoiceData] = useState([]);
  const { loading: invoiceLoading, get: getInvoiceData, response: invoiceResponse } = useFetch('/invoices');
  const { get: getTransactionData, response: transactionResponse, loading: transactionLoading } = useFetch('/transactions');

  useEffect(() => { loadInitialData() }, []) // componentDidMount
  
  async function loadInitialData() {
    const tdata = await getTransactionData();
    const idata = await getInvoiceData();
    if (transactionResponse.ok) setTransactionData(tdata)
    if (invoiceResponse.ok) setInvoiceData(idata);
  }

  return (
    <>
      <Tabs value={tab} onChange={(event: React.SyntheticEvent, tab: number) => setTab(tab)}>
          <Tab value={1} label={'Invoice List'}/>
          <Tab value={2} label={'Update/Add Invoice'} />
      </Tabs>
      {invoiceLoading || transactionLoading && <div>Loading...</div>}
      {tab === 1 && !invoiceLoading && !transactionLoading && invoiceData && transactionData &&
      <div style={{marginTop: 20}}>
          <SummaryWidget transactionData={transactionData} invoiceData={invoiceData} />
          <div style={{marginTop: 20}}>
              <InvoiceList invoiceList={invoiceData} transactionList={transactionData} />
          </div>
      </div>}
      {
        tab === 2 && !invoiceLoading && invoiceData &&
        <div style={{margin: 20}}>
          {/* <div>
            <InvoiceDropdownWidget invoiceList={mockInvoiceData.data} currentInvoice={currentInvoice} setCurrentInvoice={setCurrentInvoice} />
          </div> */}
          <div style={{marginTop: 20}}>
            <InvoiceForm invoiceData={invoiceData} />
          </div>
        </div>
      }
    </>
  )
}
