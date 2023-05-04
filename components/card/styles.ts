import { Col, Row } from "antd";
import styled from "styled-components";

export const Container = styled(Row)`
  padding: 20px;
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(Col)`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  gap: 20px;
  padding: 0 20px 0 0;
  width: 100%;
  box-shadow: 0px 9px 20px rgba(0, 0, 0, 0.25);
`;

export const ContentInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;

export const Status = styled.h3`
  font-size: 15px;
  font-weight: medium;
`;

export const Gender = styled.h4`
  font-size: 15px;
  font-weight: medium;
`;

export const Episode = styled.h5`
  font-size: 14px;
  font-weight: regular;
  color: #c6c6c6;
`;
