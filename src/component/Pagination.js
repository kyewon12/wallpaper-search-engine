import styled from 'styled-components';
import { ReactComponent as PrevIcon } from '../asset/prev.svg';
import { ReactComponent as NextIcon } from '../asset/next.svg';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 16px;
    color: var(--text); ;
`;

const PageSelect = styled.select`
    cursor: pointer;
    background-color: var(--primary);
    border: none;
    font-size: 16px;
    color: var(--highlight);
    font-weight: bold;
    font-family: inherit;
    &:focus {
        outline: none;
    }
`;

const Pagination = ({ page, setPage, numOfPages }) => {
    return (
        <Nav>
            {page !== 1 && (
                <PrevIcon
                    width="24"
                    cursor="pointer"
                    fill="var(--text)"
                    onClick={(e) => setPage((prev) => prev - 1)}
                />
            )}
             {`총 ${numOfPages} 중 `}
            <PageSelect
                name="page"
                value={page}
                onChange={(e) => setPage(parseInt(e.target.value))}
            >
                {/* array(배열 수).fill(채워줄값) */}
                {/* 페이지에 맞는 select값 */}
                {Array(numOfPages)
                    .fill()
                    .map((data, idx) => (
                        <option value={idx + 1} key={idx + 1}>
                            {idx + 1}
                        </option>
                    ))}
            </PageSelect>
            페이지
            {page !== numOfPages && (
                <NextIcon
                    width="24"
                    cursor="pointer"
                    fill="var(--text)"
                    onClick={(e) => setPage((prev) => prev + 1)}
                />
            )}
        </Nav>
    );
};

export default Pagination;
