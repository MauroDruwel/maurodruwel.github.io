document.addEventListener('DOMContentLoaded', () => {
    fetch('./assets/data/events.json')
        .then(response => response.json())
        .then(events => {
            const eventsSection = document.getElementById('Events');
            if (!eventsSection) return;

            // Clear existing content except the header
            const header = eventsSection.querySelector('h3');
            eventsSection.innerHTML = '';
            if (header) eventsSection.appendChild(header);

            events.forEach(event => {
                // Event title
                const title = document.createElement('h4');
                title.textContent = event.date ? `${event.date} - ${event.title}` : event.title;
                eventsSection.appendChild(title);

                // Media container
                let row = document.createElement('div');
                row.className = 'w3-row-padding w3-stretch';
                eventsSection.appendChild(row);

                // Group items into rows of 3 (similar to original code)
                event.items.forEach((item, index) => {
                    if (index > 0 && index % 3 === 0) {
                        const newRow = document.createElement('div');
                        newRow.className = 'w3-row-padding w3-stretch';
                        eventsSection.appendChild(newRow);
                        // Update current row reference
                        row = newRow;
                    }

                    const col = document.createElement('div');
                    col.className = 'w3-col l3 m6 w3-margin-bottom';

                    const container = document.createElement('div');
                    container.className = 'w3-display-container';
                    col.appendChild(container);

                    if (item.type === 'image') {
                        const img = document.createElement('img');
                        img.className = 'modal-img';
                        img.src = item.src;
                        img.alt = item.alt || '';
                        img.loading = 'lazy';
                        img.style.cssText = `width:100%;height:200px;object-fit:cover;${item.style || ''}`;
                        container.appendChild(img);
                    } else if (item.type === 'youtube') {
                        // Lazy load YouTube with thumbnail
                        const videoId = item.src.split('/').pop();
                        const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                        const wrapper = document.createElement('div');
                        wrapper.className = 'video-placeholder';
                        wrapper.style.position = 'relative';
                        wrapper.style.cursor = 'pointer';
                        wrapper.innerHTML = `
                            <img src="${thumbUrl}" style="width:100%; height:200px; object-fit:cover;">
                            <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:60px; height:60px; background:rgba(0,0,0,0.7); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                                <div style="width: 0; height: 0; border-top: 15px solid transparent; border-bottom: 15px solid transparent; border-left: 25px solid white; margin-left:5px;"></div>
                            </div>
                        `;

                        wrapper.onclick = () => {
                            const iframe = document.createElement('iframe');
                            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                            iframe.style.width = '100%';
                            iframe.style.height = '200px';
                            iframe.style.border = '0';
                            iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                            iframe.allowFullscreen = true;
                            container.innerHTML = '';
                            container.appendChild(iframe);
                        };
                        container.appendChild(wrapper);
                    } else if (item.type === 'audio') {
                        const audio = document.createElement('audio');
                        audio.controls = true;
                        audio.controlsList = 'nodownload';
                        const source = document.createElement('source');
                        source.src = item.src;
                        source.type = 'audio/mpeg';
                        audio.appendChild(source);
                        container.appendChild(audio);
                    } else if (item.type === 'facebook') {
                        const iframe = document.createElement('iframe');
                        iframe.loading = 'lazy';
                        iframe.src = item.src;
                        iframe.style.cssText = 'border:none;width:100%;height:200px;object-fit:cover;object-position:10% 90%;overflow:hidden;';
                        iframe.allowTransparency = 'true';
                        iframe.allow = 'encrypted-media';
                        container.appendChild(iframe);
                    }

                    row.appendChild(col);
                });
            });
            // Re-initialize modal logic for new images
            if (window.initializeModals) {
                window.initializeModals();
            }
        })
        .catch(error => console.error('Error loading events:', error));
});
