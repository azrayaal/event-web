import jwtDecode from 'jwt-decode';
import React from 'react';
import Layouts from '../../components/layout';
import TransactionDetailcard from '../../components/transaction/transactionDetailcard';
import { JWTPayloadsTypes, TransactionHistoryTypes, UserTypes } from '../../services/data-types';
import { getDetailTransactions } from '../../services/pages';

interface GetDetailTransactionProps {
  transactionDetail: TransactionHistoryTypes;
}

export default function tansactionDetailHistory(props: GetDetailTransactionProps) {
  const { transactionDetail } = props;

  return (
    <Layouts pageTitle="Transaction Hiostory">
      <TransactionDetailcard transactionDetail={transactionDetail} />
    </Layouts>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.user;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getDetailTransactions(idTrx, jwtToken);

  console.log('response detail', response);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
