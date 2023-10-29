import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

export const Container = styled.div`
    display: flex;
    margin: 40px 0;
`;
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 10px;
`;
export const TitleBlock = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const StyledTitle = styled(Title)`
    color: #00a9ff !important;
    margin: 0 !important;
`
export const StyledList = styled.ul`
    margin: 0;
    padding: 4px 20px;
`;
export const FlexBox = styled.div`
    display: flex;
    gap: 8px;
    span {
        color: #8c8c8c;
    }
`;