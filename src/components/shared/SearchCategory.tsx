import { DatePicker, Input, Select } from 'antd';
import { GoLock, GoUnlock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import * as XLSX from 'xlsx';

// Extending the jsPDF class to include the autoTable method
declare module 'jspdf' {
    interface jsPDF {
        autoTable: any;
    }
}

// Define the data type interface for the table
interface DataType {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    contact: string;
    createdAt: string;
}

const dateFormat = 'YYYY-MM-DD';

const path = [
    { path: '/', name: 'Analytics' },
    { path: '/customers', name: 'Customers' },
    { path: '/post-list', name: 'Post List' },
    { path: '/customer-details', name: 'Customer Profile' },
    { path: '/post-details', name: 'Post Details' },
    { path: '/buyer-registration', name: 'Buyer Registration' },
    { path: '/seller-transection', name: 'Seller Transection' },
];

interface SearchCategoryProps {
    data?: DataType[]; // data prop should be an array of DataType
}

export default function SearchCategory({ data }: SearchCategoryProps) {
    console.log(data);
    const location = useLocation();
    const currentPath = location.pathname;

    const currentPage = path.find((item) => item.path === currentPath);

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
                    <button className="">
                        <GoUnlock size={28} className="text-textGray" />
                    </button>
                    <button className="">
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

                {currentPage &&
                (currentPage.path === '/buyer-registration' ||
                    currentPage.path === '/customers' ||
                    currentPage.path === '/seller-transection') ? (
                    <div>
                        <DatePicker
                            className="w-28 h-10"
                            minDate={dayjs('2019-08-01', dateFormat)}
                            maxDate={dayjs('2020-10-31', dateFormat)}
                        />
                    </div>
                ) : (
                    <>
                        <div>
                            <Select
                                defaultValue="Category"
                                className="rounded-full shadow-black w-28 h-10"
                                style={{ fontFamily: 'Poppins' }}
                            >
                                <Select.Option value="car">Car</Select.Option>
                                <Select.Option value="bike">Bike</Select.Option>
                            </Select>
                        </div>
                        <div>
                            <Select
                                defaultValue="Status"
                                className="rounded-full shadow-black w-28 h-10"
                                style={{ fontFamily: 'Poppins' }}
                            >
                                <Select.Option value="car">Posted</Select.Option>
                                <Select.Option value="bike">Holding</Select.Option>
                            </Select>
                        </div>
                        <div>
                            <DatePicker
                                className="w-32 h-10"
                                minDate={dayjs('2019-08-01', dateFormat)}
                                maxDate={dayjs('2020-10-31', dateFormat)}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
