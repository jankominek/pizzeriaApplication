import axios from "axios";
import { useEffect, useState } from "react";
import { AddEmployeeToOrderModal } from "../AddEmployeeToOrderModal";
import { BorderRight, ColumnRow, ColumnWrapper, DishInfoField, DishInfoIngredientsContainer, DishInfoName, DishInfoWrapper, IngredientField, Layer, Row, RowButton, RowField, RowFlexCol, RowTable, TableWrapper, Test } from "./Table.styled"

const columns = ['ID', 'adres', 'imię', 'nazwisko', 'email', 'nr.tel', 'miasto', 'województwo', 'kwota', '           ']
const dataRow = [1, 'ADRESTEST', 'jan', 'kominek', 'jan@gmail.com', 'poznan', 'WLKP', 48];
const columnsSizes = ['4rem', '9rem', '9rem', '9rem',"12rem", "7rem", "10rem", "10rem", "6rem"];


export const Table = (props) => {

    const {status} = props;

    const [orders, setOrders] = useState([]);
    const [showDeitals, setShowDetails] = useState(false);
    const [showedOrder, setShowedOrder] = useState();
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState();
    const [isEmployeeAdded, setIsEmployeeAdded] = useState(false);


    useEffect(()=>{
        setOrders(props.orders)
    }, [props.orders])

    console.log("table orders: ", orders)

    const columnList = columns.map( (col, i) => (
        <>
            <ColumnRow widthField={columnsSizes[i]}>{col}</ColumnRow>
        </>
    ))

    const changeOrderStatus = (orderId) => {
        console.log("order : ", orderId)
        axios.post(`http://localhost:8079/order/changeStatus/${orderId}`)
            .then(response => {
                return response.data;
            }) 
    }
    const postEmployeeToOrder = (orderId, employeeId) => {
        axios.post(`http://localhost:8079/order/addToOrder/${employeeId}/${orderId}`);

        const filteredOrder = orderId && orders.filter( order => order.idOrder == orderId);
        const newOrderArray = orders.filter( orderObject =>  orderObject.idOrder !== filteredOrder[0].idOrder);
        changeOrderStatus(orderId);
        setOrders(newOrderArray);
    }
    const realizeOrder = (event) => {
        const id = event.target.id;
        console.log("order in realizeOrder : ", id)
        setIsModalShowing(true)
        setSelectedOrder(id);
    }
    const finishOrder = (event) => {
        const id = event.target.id;
        console.log("order in realizeOrder : ", id)
        const filteredOrder = id && orders.filter( order => order.idOrder == id);
        const newOrderArray = orders.filter( orderObject =>  orderObject.idOrder !== filteredOrder[0].idOrder);
        changeOrderStatus(id);
        setOrders(newOrderArray);
    }
    console.log("selected order : ", showedOrder)
    const showOrderDetails = (event) =>{
        const id = event.target.id;
        console.log("is the same : ", id === showedOrder)
        if(id === showedOrder){
            setShowDetails(false)
            setShowedOrder(null)
        }else{
            setShowedOrder(id)
            console.log("event", event.target.id)
            console.log("id : ", id)
            const selectedOrder = id && orders.filter( order => order.idOrder == id);
            console.log("selectedOrder : ", selectedOrder)
            setShowDetails(true);
        }
    }

    const onCloseModal = () => {
        setIsModalShowing(false)
    }
    console.log("isEmployeeAdded : ", isEmployeeAdded)
    const onSaveModal = (empId) => {
        setIsModalShowing(false);
        postEmployeeToOrder(selectedOrder, empId);
    }

    const rowList = orders.map((order, i) => (
        <>
        <RowFlexCol >
        <Row isOdd={Boolean(i%2)}>
            <RowField widthField="4rem">{order.idOrder}</RowField>
            <RowField widthField="9rem">{order.address}</RowField>
            <RowField widthField="9rem">{order.firstName}</RowField>
            <RowField widthField="9rem">{order.lastName}</RowField>
            <RowField widthField="12rem">{order.email}</RowField>
            <RowField widthField="7rem">{order.phone}</RowField>
            <RowField widthField="10rem">{order.city}</RowField>
            <RowField widthField="10rem">{order.voivodeship}</RowField>
            <RowField widthField="6rem">{order.price}</RowField>
            { status == -1 && <RowButton widthField="9rem" id={order.idOrder} onClick={realizeOrder}>realizuj</RowButton>}
            { status == 0 && <RowButton widthField="9rem" id={order.idOrder} onClick={finishOrder}>zakończ</RowButton>}
        </Row>
        <Layer id={order.idOrder} onClick={showOrderDetails} />
        </RowFlexCol>
        {showDeitals && showedOrder == order.idOrder && <DishInfoWrapper>
            {order.dishes.map( dish => (
                <DishInfoField>
                <DishInfoName>
                    {dish.dishName}
                    <BorderRight />
                    </DishInfoName>
                <DishInfoIngredientsContainer>
                    {dish.ingredients.map( ingredient => (
                        <IngredientField>{ingredient.ingredientName}</IngredientField>
                    ))}
                </DishInfoIngredientsContainer>
            </DishInfoField>
            ))}
        </DishInfoWrapper>}
        </>
    ))



    return (
        <>
            <TableWrapper>
                <RowTable>
                    <ColumnWrapper>
                        {columnList}
                    </ColumnWrapper>
                    <>
                     {rowList}
                    </>
                   
                </RowTable>
                { isModalShowing && <AddEmployeeToOrderModal onCloseModal={onCloseModal}
                                                            onSaveModal={onSaveModal}
                                                            
                                                            
                                                            
                                                            />}
            </TableWrapper>
        </>
    )
}