import { useState } from "react"

export default function Song() {
    const [link, setLink] = useState('')

    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLkQKpzRGtPP9uzgsEOekO6LCjRJqHyDyw&maxResults=22&key=AIzaSyCVRlkdnQbPOTph2VCSw_8t7XVqx28kgkU')
        .then(req => {
            return req.json();
        })
        .then(data => {
            const items = data.items;
            const videoId = items[Math.floor(Math.random() * 22)].snippet.resourceId.videoId
            //console.log(videoId)
            setLink(`https://www.youtube.com/watch?v=${videoId}`)
        });

    return (
        <a
            href={link}
            target='_blank'
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            Random Song!

            <span>(If the link doesn't work, it's probably because my quota has been maxed out.)</span>
        </a>
    );
};