import React, { useState } from "react";
import './styles.css';
import request from '../../Apis/requests';
import Input from '../../Component/Shared/Input';
import Button from '../../Component/Shared/Button';

const CreateCapsule = () => {
        const [title, setTitle] = useState("");
        const [message, setMessage] = useState("");
        const [image, setImage] = useState("");
        const [audio, setAudio] = useState("");
        const [reveal, setReveal] = useState("");
        const [privacy, setPrivacy] = useState("");
        const [color, setColor] = useState("");
        const [mood, setMood] = useState("");
        const [Tags, setTags] = useState("");

const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
        });
        };

const HandleNewCapsule = async () => {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("message", message);
        formData.append("revealed_at", reveal);
        formData.append("privacy", privacy);
        formData.append("color", color);
        formData.append("mood", mood);
        formData.append("tags", Tags);
        formData.append("location", "AutoLocation");

        const attachments = [];

        if (image) {
                const base64Image = await fileToBase64(image);
                attachments.push(base64Image);
        }

        if (audio) {
                const base64Audio = await fileToBase64(audio);
                attachments.push(base64Audio);
        }

        attachments.forEach((base64) => {
                formData.append("attachments[]", base64);
        });

        for (let pair of formData.entries()) {
                console.log(`${pair[0]}:`, pair[1]);
        }

        try {
                const res = await request({
                url: 'create',
                method: 'post',
                data: formData,
        });

        console.log("Capsule created:", res);
        } catch (err) {
                console.error("Error:", err.response?.data || err.message);
        }
        };

        return (
        <div className="capsule-form-container capsule-form">
                <h2>Create a Time Capsule</h2>

                <Input label={"Title"}
                        type={"text"}
                        name={"title"}
                        placeholder={"Type short title"}
                        required
                        onChange={(e) => setTitle(e.target.value)} />

                <Input label={"Message"}
                        type={"textarea"}
                        name={"message"}
                        placeholder={"Write your message to the future..."} r
                        required
                        onChange={(e) => setMessage(e.target.value)} />

        <label>Attachments:</label>
                <Input label={"Image"}
                        type={"file"}
                        name={"image"}
                        accept="image/*"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                        />
                
                <Input label={"Audio"}
                        type={"file"}
                        name={"audio"}
                        accept="audio/*"
                        onChange={(e) => setAudio(e.target.files[0])}
                        />

                <Input label={"Reveal Date:"}
                        type={"date"}
                        name={"reveal"}
                        required
                        onChange={(e) => setReveal(e.target.value)}
                        />

        <label>Privacy:</label>
                <select name='privacy' onChange={(e) => setPrivacy(e.target.value)} required>
                        <option value="">--Choose privacy--</option>
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                        <option value="unlisted">Unlisted</option>
                </select>

        <label>Customization:</label>
                <Input label={"Color:"}
                        type={"color"}
                        name={"color"}
                        required
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

        <Input label={"Tags"}
                type={"text"}
                name={"tags"}
                placeholder={"Tags (comma-separated)"}
                required
                onChange={(e) => setTags(e.target.value)}
                />

        <Button text={"Create Capsule"}
        onClick={HandleNewCapsule}
        />
        </div>
);
};

export default CreateCapsule;
