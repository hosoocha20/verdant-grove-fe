import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { IUser } from "../interfaces/IUser";
import { IOrderDetail } from "../interfaces/IOrder";



const Orders = () => {
    const { users, authedUser } : {users: IUser[], authedUser: IUser} = useOutletContext();
    const [orderHistory, setOrderHistory] = useState<IOrderDetail[]>([]);

    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [page, setPage] = useState(0);
    //const [noOfPages] = useState(Math.ceil(rows.length / itemsPerPage));
  
    const handleChange = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      value: number
    ) => {
      setPage(value);
    };

    useEffect(() =>{
      const user = users.find((u) => u.email === authedUser.email);
      if (user)
        setOrderHistory(user.orders);
    },[])
  return (
    <div className="account-orders-container">
      <h2>Orders</h2>
      <hr></hr>
      <h3>Order History</h3>
      <div className="account-order-history-container">
        {orderHistory.length !== 0 ? (
          <div className="account-order-history-exists">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Order</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderHistory
                    .slice(
                      page * itemsPerPage,
                      page * itemsPerPage + itemsPerPage
                    )
                    .map((row) => (
                      <TableRow
                        key={row.orderNo}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ cursor: "pointer" }}
                        >
                          #{row.orderNo}
                        </TableCell>
                        <TableCell align="left">{row.date.toLocaleString('en-NZ', {month: 'long', day: 'numeric', year: 'numeric'})}</TableCell>
                        <TableCell align="left">{row.payment}</TableCell>
                        <TableCell align="left">${Number(row.total).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>

              <TablePagination
                count={orderHistory.length}
                page={page}
                rowsPerPage={itemsPerPage}
                rowsPerPageOptions={[-1]}
                onPageChange={handleChange}
                style={{ padding: "1rem", display: "flex", border: "none" }}
              />
            </TableContainer>
          </div>
        ) : (
          <div className="account-order-history-none">
            <p className="account-order-history-none__icon"> i</p>
            <p>You have no order history.</p>
          </div>
        )}
      </div>

      <hr></hr>
    </div>
  );
};

export default Orders;
