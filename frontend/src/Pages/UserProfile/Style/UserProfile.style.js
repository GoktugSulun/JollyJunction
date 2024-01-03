import styled from '@emotion/styled';
import { ContentWrapper } from '../../../Core/Components/Pages/ContentWrapper.style';

export const UserProfile = styled(ContentWrapper)`
    background-color: #0f0f0f;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 0 75px;
    margin-top: 30px;
    gap: 50px;
    transition: padding 350ms;
    .post-wrapper {
        div:first-child {
            margin-top: 0;
        }
        .loading-container {
            margin: 25px 0;
        }
        .more-button-container {
            display: flex;
            justify-content: center;
            margin-top: 25px;
            button {
                width: 100%;
            }
        }
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 0 40px;
    }
`;

export const NoData = styled.div`
    background-color: #181818;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    p {
        color: #c9c9c9;
    }
    svg {
        font-size: 120px;
        path {
            fill: #7a7a7a;
        }
    }
`;