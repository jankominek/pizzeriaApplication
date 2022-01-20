import { ColumnRow, ColumnWrapper, RowTable, TableWrapper } from "./Table.styled"

const columns = ['ID', 'adres', 'imię', 'nazwisko', 'email', 'nr.tel', 'miasto', 'województwo', 'cena', '           ']
const dataRow = [1, 'ADRESTEST', 'jan', 'kominek', 'jan@gmail.com', 'poznan', 'WLKP', 48];

export const Table = () => {


    const columnList = columns.map( col => (
        <>
            <ColumnRow>{col}</ColumnRow>
        </>
    ))



    return (
        <>
            <TableWrapper>
                <RowTable>
                    <ColumnWrapper>
                        {columnList}
                    </ColumnWrapper>
                </RowTable>
            </TableWrapper>
        </>
    )
}