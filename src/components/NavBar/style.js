import styled from "styled-components";

const Wrapper = styled.section`

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgb(21, 25, 28);
    color: white;
    width: 100%;
    padding: 15px 20px;
    position: fixed;
}


/* Initials style */
.initials {
    font-size: 35px;
    background-color:rgb(243, 80, 129);
    border-radius: 50%;
    padding: 15px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Menu items */
.menu {
    display: flex;
    gap: 20px;
    font-size: 20px;
}

/* Hamburger button */
.hamburger {
    display: none;
    font-size: 30px;
    cursor: pointer;
}

/* Media query for responsiveness */
@media (max-width: 768px) {
     .menu {
        display: none;
        flex-direction: column;
        gap: 15px;
        position: absolute;
        top: 100px;
        right: 0; 
        background-color: rgba(3, 3, 3, 0.7);
        padding: 20px;
        z-index: 10;
        width: 200px; 
    }

    .menu.open {
        display: flex;
    }

    .hamburger {
        display: block;
    }
}
`;

export default Wrapper;
