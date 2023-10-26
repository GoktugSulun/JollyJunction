import styled from '@emotion/styled';

export const PostModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
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
    display: flex;
    flex-direction: column;
`;

export const CommentsSectionHeader = styled.div`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 10px 20px;
        &__user {
            display: flex;
            align-items: center;
            gap: 10px;
            .MuiButton-root {
                :hover + a {
                    color: #FFFFFF;
                    /* text-decoration: underline; */
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
                    /* text-decoration: underline; */
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

export const CommentsSectionBody = styled.div`
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const CommentsSectionFooter = styled.div`
    padding: 0 10px 10px;
    .tools {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        &__like-comment {
            display: flex;
            gap: 5px;
        }
        .MuiIconButton-root {
            :hover {
                background-color: #333;
            }
            svg {
                path {
                    fill: #927CD9;
                }
            }
        }
    }
    .post-detail {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        &__likes {
            padding: 0;
            background: transparent;
            font-size: 14px;
            min-width: initial;
            color: #9d9a9a;
            transition: color 350ms;
            :hover {
                color: #FFFFFf;
            }
        }
        &__date {
            color: #9d9a9a;
            font-size: 12px;
        }
    }
`;

export const CreateComment = styled.div`
    padding: 10px 0;
    .MuiOutlinedInput-root {
        background-color: transparent;
        color: #c9c9c9;
        input {
            padding: 10px 5px 10px 15px;
            ::placeholder {
                color: #9d9a9a;
            }
        }
        fieldset {
            border: none;
        }
        .MuiIconButton-root {
            svg {
                transition: opacity 350ms;
                path {
                    fill: ${(props) => props.disabled ? '#9d9a9a' : '#c9c9c9'};
                }
            }
            :hover {
                background-color: #333;
            }
        }
    }
`;