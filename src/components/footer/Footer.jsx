import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
`;

const FooterText = styled.p`
    color: #888;
    font-size: 14px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>© 2022 Bookwise. All rights reserved.</FooterText>
        </FooterContainer>
    );
};

export default Footer;