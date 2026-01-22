document.addEventListener('DOMContentLoaded', () => {
    fetch('./assets/data/maker.json')
        .then(response => response.json())
        .then(videoIds => {
            const makerSection = document.getElementById('Maker');
            if (!makerSection) return;

            let container = document.getElementById('maker-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'maker-container';
                makerSection.parentNode.insertBefore(container, makerSection.nextSibling);
            }
            container.innerHTML = '';

            let currentRow;
            videoIds.forEach((id, index) => {
                if (index % 4 === 0) {
                    currentRow = document.createElement('div');
                    currentRow.className = 'w3-row-padding';
                    container.appendChild(currentRow);
                }

                const col = document.createElement('div');
                col.className = 'w3-col l3 m6 w3-margin-bottom';

                const displayContainer = document.createElement('div');
                displayContainer.className = 'w3-display-container';
                col.appendChild(displayContainer);

                const thumbUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

                const wrapper = document.createElement('div');
                wrapper.className = 'video-placeholder';
                wrapper.style.position = 'relative';
                wrapper.style.cursor = 'pointer';
                wrapper.innerHTML = `
                    <img src="${thumbUrl}" style="width:100%; height:190px; object-fit:cover;">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:50px; height:50px; background:rgba(0,0,0,0.7); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                        <div style="width: 0; height: 0; border-top: 12px solid transparent; border-bottom: 12px solid transparent; border-left: 20px solid white; margin-left:4px;"></div>
                    </div>
                `;

                wrapper.onclick = () => {
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
                    iframe.style.width = '100%';
                    iframe.style.height = '190px';
                    iframe.style.border = '0';
                    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;
                    displayContainer.innerHTML = '';
                    displayContainer.appendChild(iframe);
                };
                displayContainer.appendChild(wrapper);
                currentRow.appendChild(col);
            });
        })
        .catch(error => console.error('Error loading maker videos:', error));
});