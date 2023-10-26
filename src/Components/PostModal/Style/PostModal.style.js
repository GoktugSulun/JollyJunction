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
    flex: 1;
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
        .user {
            display: flex;
            align-items: center;
            gap: 20px;
            &__info {
                display: flex;
                flex-direction: column;
            }
            &__position {
                font-size: 12px;
                color: #9a9a9a;
            }
            &__name {
                color: #c9c9c9;
                text-decoration: none;
                transition: all 350ms;
                :hover {
                    color: #FFFFFF;
                }
            }
            .MuiButton-root {
                :hover + .user__info .user__name {
                    color: #FFFFFF;
                }
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: 10px 5px 10px 0;
`;

export const CommentContainer = styled.div`
    display: flex;
    gap: 20px;
    .MuiButton-root {
        align-self: flex-start;
        min-width: initial;
        :hover + .comment-wrapper div .header .user .user__name {
            color: #FFFFFF;
        }
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }
    .comment-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        .user {
            display: flex;
            flex-direction: column;
            &__name {
                color: #c9c9c9;
                text-decoration: none;
                :hover {
                    color: #FFFFFF;
                }
            }
            &__position {
                font-size: 12px;
                color: #9a9a9a;
            }
        }
    }
    .text {
        color: #c9c9c9;
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .footer {
        display: flex;
        gap: 15px;
        align-items: center;
        > * {
            font-size: 12px;
            color: #9a9a9a;
        }
    }
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