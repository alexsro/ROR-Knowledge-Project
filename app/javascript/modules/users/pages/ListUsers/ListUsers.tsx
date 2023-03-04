import React, { useEffect, useState } from 'react'
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
  Text,
  Heading
} from '@chakra-ui/react'

export const ListUsers: React.FC = data => {
  const [users] = useState<IUser[]>(data['data'] as IUser[])

  return (
    <>
      <Heading as="h1" py="30px" fontSize="30px" pl="20px">
        Lista de Usuários
      </Heading>
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
                  <Td>
                    <Link href={`localhost:3000/users/${user.id}`}>
                      <Text>{'Visualizar Usuário'}</Text>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </>
  )
}
