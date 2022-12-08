import jwtDecode from 'jwt-decode';
import React from 'react';
import RequestDetailCard from '../../components/cards/card-requestDetail';
import Layouts from '../../components/layout';
import { JWTPayloadsTypes, RequestHistoryTypes, UserTypes } from '../../services/data-types';
import { getDetailRequest } from '../../services/pages';

interface GetDetailRequestProps {
  requestDetail: RequestHistoryTypes;
}

export default function DetailRequest(props: GetDetailRequestProps) {
  const { requestDetail } = props;
  console.log('data detail rq'), requestDetail;

  return (
    <Layouts pageTitle="Detail Request">
      <RequestDetailCard requestDetail={requestDetail} />
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
    idRq: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idRq } = params;
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
  const response = await getDetailRequest(idRq, jwtToken);

  console.log('response params', response);

  return {
    props: {
      requestDetail: response.data,
    },
  };
}
