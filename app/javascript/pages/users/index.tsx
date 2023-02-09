import React, { useEffect, useState } from 'react';
import IUser from "../../types/User/IUser"
import { PageContainer, PageHeader, PageBody, StyledTableContainer, StyledTable, StyledTableHead, StyledTablebody, StyledTableTr, StyledTableTd, StyledTableTh } from './styles';

const UsersIndex: React.FC<IUser[]> = ({ ...data }) => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setUsers(Object.values(data) as IUser[])
  }, [])

  return (
    <PageContainer>
      <PageHeader>
        <h1>Lista de usuários</h1>
      </PageHeader>
      <PageBody>
        <StyledTableContainer>
          <StyledTable>
            <StyledTableHead >
              <StyledTableTr>
                <StyledTableTh> Nome </StyledTableTh>
                <StyledTableTh> Email </StyledTableTh>
              </StyledTableTr>
            </StyledTableHead>
            <StyledTablebody>
              {users.map((user) => (
                <StyledTableTr key={user.id}>
                  <StyledTableTd>{user.name}</StyledTableTd>
                  <StyledTableTd>{user.email}</StyledTableTd>
                </StyledTableTr>
              ))}
            </StyledTablebody>
          </StyledTable>
        </StyledTableContainer>
      </PageBody>
    </PageContainer>
  );
};

export default UsersIndex;