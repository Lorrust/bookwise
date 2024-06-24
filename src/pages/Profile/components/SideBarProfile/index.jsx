import { useState, useRef } from 'react';
import * as Styled from './styles';

export const SideBarProfile = ({photo, loggedUser}) => {
    const name = loggedUser.name.replaceAll(" ", "+");
    const [profilePhoto, setProfilePhoto] = useState(photo);
    const fileInputRef = useRef(null);

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Styled.Container>
            <Styled.Avatar 
                src={profilePhoto ? setProfilePhoto : `https://ui-avatars.com/api/?background=random&name=${name}`} 
                alt="profile photo" 
                onClick={handleAvatarClick}
            />
            <input 
                type="file" 
                style={{ display: 'none' }} 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*"
            />
            <Styled.Textos>
                <h2><strong>{loggedUser.username}</strong></h2>
                <p>{loggedUser.email}</p>
            </Styled.Textos>
        </Styled.Container>
    );
}