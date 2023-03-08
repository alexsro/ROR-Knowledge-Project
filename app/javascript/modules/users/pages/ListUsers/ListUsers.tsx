import React, { useState } from 'react'
import IUser from '../../../../types/User/IUser'
import {
  Table,
  Thead,
  Tbody,
  TableContainer,
  Tr,
  Td,
  Th,
  Link,
  TableCaption,
  Button
} from '@chakra-ui/react'
import { BiAddToQueue, BiShow } from 'react-icons/bi'

export const ListUsers: React.FC = data => {
  const [users] = useState<IUser[]>(data['data'] as IUser[])

  const handleCreateUser = () => {
    alert('t')
  }

  return (
    <>
      <Button onClick={handleCreateUser} colorScheme="orange">
        <BiAddToQueue></BiAddToQueue>
        Adicionar usuários
      </Button>
      <main>
        <TableContainer>
          <Table variant="striped" colorScheme="blackAlpha">
            <TableCaption fontSize="24px" placement="top">
              Lista de usuários
            </TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                <Th> Nome </Th>
                <Th> Email </Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => (
                <Tr key={user.id}>
                  <Td>
                    <Link href={`users/${user.id}`}>
                      <BiShow title="Visualizar Usuário"></BiShow>
                    </Link>
                  </Td>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </>
  )
}
