import React from 'react';
import './styles.css';
import { useState } from "react";
import Input from '../../Component/Shared/Input';
import Button from '../../Component/Shared/Button';

const CreateCapsule = () => {

    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    const [image, setImage] = useState();
    const [audio, setAudio] = useState();
    const [reveal, setReveal] = useState();
    const [privacy, setPrivacy] = useState();
    const [color, setColor] = useState();
    const [mood, setMood] = useState();
    const [coverImage, setCoverImage] = useState();
    const [Surprise, setSurprise] = useState();
    const [Tags, setTags] = useState();
    
    const HandleNewCapsule = async () => {
                    console.log(title, message, image, audio, reveal, privacy, color, mood, coverImage, Surprise, Tags);

                    // const res = await axios.post("loginUrl", {
                    //    email,
                    //   password,
                    // });
    }

    return (
    <div className="capsule-form-container capsule-form">
    <h2>Create a Time Capsule</h2>
        <Input label={"Title"}
                        type={"text"}
                        name={"title"}
                        placeholder={"Type short title"}
                        required={true}
                        onChange={(e) => setTitle(e.target.value)}
                />
        
        <Input label={"Message"}
                        type={"textarea"}
                        name={"message"}
                        placeholder={"Write your message to the future..."}
                        required={true}
                        onChange={(e) => setMessage(e.target.value)}
                />
        <label>Attachments:</label>
        <Input label={"Image"}
                        type={"file"}
                        name={"image"}
                        required={true}
                        accept="image/*"
                        onSelect={(e) => setImage(e.target.value)}
                />
        <Input label={"Audio"}
                        type={"file"}
                        name={"audio"}
                        required={false}
                        accept="audio/*"
                        onChange={(e) => setAudio(e.target.value)}
                />
        
        <Input label={"Reveal Date:"}
                        type={"datetime-local"}
                        name={"reveal"}
                        required={true}
                        onChange={(e) => setReveal(e.target.value)}
                />
        
        <label>Privacy:</label>
        <select onChange={(e) => setPrivacy(e.target.value)}>
            <option value="private">Private</option>
            <option value="public">Public</option>
            <option value="unlisted">Unlisted</option>
        </select>
        <label>Customization:</label>
        <Input label={"Color:"}
                        type={"color"}
                        name={"color"}
                        required={true}
                        onChange={(e) => setColor(e.target.value)}
                />
        <label>Mood:</label>
        <select id="mood" name="mood" onChange={(e) => setMood(e.target.value)} required>
            <option value="">--Choose a mood--</option>
            <option value="😀">😀 Happy</option>
            <option value="🤩">🤩 Excited</option>
            <option value="😢">😢 Sad</option>
            <option value="😠">😠 Angry</option>
            <option value="🌈">🌈 Hopeful</option>
            <option value="🙏">🙏 Grateful</option>
            <option value="🕰️">🕰️ Nostalgic</option>
            <option value="❤️">❤️ In Love</option>
            <option value="🤔">🤔 Curious</option>
            <option value="💪">💪 Motivated</option>
            <option value="🧘">🧘 Calm</option>
            <option value="🌙">🌙 Dreamy</option>
            <option value="😂">😂 Funny</option>
            <option value="📖">📖 Reflective</option>
            <option value="🧭">🧭 Adventurous</option>
            <option value="✨">✨ Inspired</option>
            <option value="😲">😲 Surprised</option>
            <option value="😔">😔 Lonely</option>
            <option value="😌">😌 Relaxed</option>
        </select>

        <Input label={"Image"}
                        type={"file"}
                        name={"cover-image"}
                        required={true}
                        accept="image/*"
                        onSelect={(e) => setCoverImage(e.target.value)} />
    
        <Input label={"Tags"}
                        type={"text"}
                        name={"tags"}
                        required={true}
                        placeholder={"Tags (comma-separated)"}
                        onSelect={(e) => setTags(e.target.value)} />
        <label>
            <input type="checkbox" onChange={(e) => setSurprise(e.target.value)}/>
            Surprise Mode (Hide content until reveal)
        </label>

        <Button
                    text={"Create Capsule"}
                    onClick={HandleNewCapsule}
                />

</div>
    );
};

export default CreateCapsule;
