import { render, screen } from '@testing-library/react';
import { SummaryWidget } from './SummaryWidget';
import { TransactionType } from './InvoiceDropdownWidget';

const mockTransactionData: { data: TransactionType[] } = {
  "data": [
    {
      "id": 1,
      "nameOfClient": "Client 1",
      "transactionDate": "2024-15-01",
      "amount": 10000,
    },
    {
      "id": 2,
      "nameOfClient": "Client 2",
      "transactionDate": "2024-02-01",
      "amount": 2000,
    },
    {
      "id": 3,
      "nameOfClient": "Client 3",
      "transactionDate": "2024-03-01",
      "amount": -7000,
    },
  ]};

// test('renders total amount correctly', () => {
//   render(<SummaryWidget loading={false} transactionData={mockTransactionData} />);
//   const totalAmountElement = screen.getByText(/Total Amount/i);
//   const loadingElement = screen.queryByText(/Loading/i);
//   expect(totalAmountElement).toBeInTheDocument();
//   expect(loadingElement).toBe(null);

//   const totalAmountValue = screen.getByText('5000');
//   expect(totalAmountValue).toBeInTheDocument();
// });

// test('renders empty correctly', () => {
//   render(<SummaryWidget loading={false} transactionData={{ data : []}} />);
//   const totalAmountElement = screen.getByText(/No data available/i);
//   expect(totalAmountElement).toBeInTheDocument();
// });

// test('renders loading correctly', () => {
//   render(<SummaryWidget loading={true} transactionData={{ data : []}} />);
//   const totalAmountElement = screen.getByText(/Loading/i);
//   expect(totalAmountElement).toBeInTheDocument();
// });

// test('renders number of invoices correctly', () => {
//   render(<SummaryWidget />);
//   const invoicesElement = screen.getByText(/# of Invoices/i);
//   expect(invoicesElement).toBeInTheDocument();

//   const invoicesValue = screen.getByText(/(\d+)/);
//   expect(invoicesValue).toBeInTheDocument();
// });