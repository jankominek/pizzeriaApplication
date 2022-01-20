import { ColumnRow, ColumnWrapper, RowTable, TableWrapper } from "./Table.styled"

const columns = ['ID', 'adres', 'imię', 'nazwisko', 'email', 'nr.tel', 'miasto', 'województwo', 'cena']
const dataRow = [1, 'ADRESTEST', 'jan', 'kominek', 'jan@gmail.com', 'poznan', 'WLKP', 48];

export const Table = () => {

    return (
        <>
            <TableWrapper>
                <RowTable>
                    <ColumnWrapper>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                        <ColumnRow>asd</ColumnRow>
                    </ColumnWrapper>
                </RowTable>
            </TableWrapper>
        </>
    )
}