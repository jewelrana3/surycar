import { DatePicker, Input } from 'antd';
import { GoLock, GoUnlock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import dayjs from 'dayjs';
import * as XLSX from 'xlsx';

// Extending the jsPDF class to include the autoTable method
declare module 'jspdf' {
    interface jsPDF {
        autoTable: any;
    }
}

// Define the data type interface for the table
interface DataType {
    _id: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    contact: string;
    createdAt: string;
}

const dateFormat = 'YYYY-MM-DD';

interface SearchCategoryProps {
    data?: DataType[];
    setLock?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    selectedRowKeys?: string[];
}

export default function SearchCategory({ data, setLock, selectedRowKeys }: SearchCategoryProps) {
    const generatePDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text('Customer List Report', 20, 20);

        const headers = [['Name', 'Address', 'Email', 'Contact', 'Date']];

        const rows = data?.map((item) => [item.firstName, item.address, item.email, item.contact, item.createdAt]);

        autoTable(doc, {
            head: headers,
            body: rows,
            startY: 30,
        });

        // Save the generated PDF
        doc.save('customer_report.pdf');
    };

    const generateExcel = () => {
        // Ensure the data is available and correctly formatted
        const sheetData = data?.map((item) => ({
            Name: item.firstName,
            Address: item.address,
            Email: item.email,
            Contact: item.contact,
            Date: item.createdAt?.slice(0, 10),
        }));

        // Create a new workbook
        const wb = XLSX.utils.book_new();

        const ws = XLSX.utils.json_to_sheet(sheetData || []);

        XLSX.utils.book_append_sheet(wb, ws, 'Customer Data');

        XLSX.writeFile(wb, 'Customer_Report.xlsx');
    };

    const handleUnlock = () => {
        if (selectedRowKeys) {
            const lockState = selectedRowKeys.reduce(
                (acc, key) => ({
                    ...acc,
                    [key]: false,
                }),
                {},
            );
            setLock?.(lockState);
        }
    };

    const handleLock = () => {
        if (selectedRowKeys) {
            const lockState = Object.fromEntries(selectedRowKeys.map((key) => [key, true]));
            setLock?.(lockState);
        }
    };

    return (
        <div className="flex justify-end">
            <div className="flex items-center p-4 rounded-lg space-x-2">
                <div className="flex space-x-4 mr-4">
                    <button className="" onClick={generatePDF}>
                        <img src="/customer/pdf.svg" alt="pdf" />
                    </button>
                    <button className="" onClick={generateExcel}>
                        <img src="/customer/xcel.svg" alt="xcel" />
                    </button>
                    <button className="" onClick={handleUnlock}>
                        <GoUnlock size={28} className="text-textGray" />
                    </button>
                    <button className="" onClick={handleLock}>
                        <GoLock size={28} className="text-textGray" />
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Search here"
                        className="px-2  w-80 rounded-full shadow-black"
                        prefix={<FaSearch size={13} className="bg-[#B7DBC9] text-[#58553A] rounded-full w-9 h-9 p-2" />}
                    />
                </div>

                <div>
                    <DatePicker
                        className="w-28 h-10"
                        minDate={dayjs('2019-08-01', dateFormat)}
                        maxDate={dayjs('2020-10-31', dateFormat)}
                    />
                </div>
            </div>
        </div>
    );
}
