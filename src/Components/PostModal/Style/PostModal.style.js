import styled from '@emotion/styled';

export const PostModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    border: none;
    border-radius: 10px;
    width: 80vw;
    height: 80vh;
    display: flex;
`;

export const Image = styled.div`
    flex: 1.5;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
`;

export const CommentsSection = styled.div`
    flex: 1;
    background: #0f0f0f;
`;

export const CommentsSectionHeader = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        &__user {
            display: flex;
            align-items: center;
            gap: 10px;
            .MuiButton-root {
                :hover + a {
                    color: #FFFFFF;
                    text-decoration: underline;
                }
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
            }
            a {
                color: #c9c9c9;
                text-decoration: none;
                transition: all 350ms;
                :hover {
                    color: #FFFFFF;
                    text-decoration: underline;
                }
            }
        }
        .MuiIconButton-root {
            background: #222;
            :hover {
                background: #333;
                svg path {
                    fill: #FFFFFF;
                }
            }
            svg {
                path {
                    fill: #9a9a9a;
                }
            }
        }
    }
    .description {
        padding: 0 20px;
        color: #c9c9c9;
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;