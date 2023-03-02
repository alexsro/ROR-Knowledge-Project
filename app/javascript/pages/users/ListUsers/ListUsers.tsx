import React, { useEffect, useState } from 'react'
import IUser from '../../../types/User/IUser'
import {
  Table,
  Thead,
  Tbody,
  TableContainer,
  Tr,
  Td,
  Th
} from '@chakra-ui/react'

export const ListUsers: React.FC<IUser[]> = ({ ...data }) => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    setUsers(Object.values(data) as IUser[])
  })

  return (
    <div>
      <div style={{ fontSize: '30px', marginLeft: '10px' }}>
        <h1>Lista de Usuários</h1>
      </div>
      <main>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th> Nome </Th>
                <Th> Email </Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </div>
  )
}
