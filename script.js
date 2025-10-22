 let currentLevel = 1;
        const totalLevels = 4;

        function updateProgress() {
            const progress = (currentLevel / totalLevels) * 100;
            document.getElementById('progress').style.width = progress + '%';
        }

        function showLevel(level) {
            document.querySelectorAll('.challenge').forEach(challenge => {
                challenge.classList.remove('active');
            });
            document.getElementById(`challenge-${level}`).classList.add('active');
        }

        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDelay = Math.random() * 5 + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }
        }

        function checkHTML() {
            const input = document.getElementById('html-input').value.toLowerCase();
            const feedback = document.getElementById('html-feedback');
            
            if (input.includes('<h1>') && input.includes('</h1>') && 
                (input.includes('<p>') || input.includes('<div>'))) {
                feedback.className = 'feedback success';
                feedback.innerHTML = '✅ Отлично! Ты создал правильную структуру HTML!';
                setTimeout(() => {
                    currentLevel = 2;
                    showLevel(2);
                    updateProgress();
                }, 1500);
            } else {
                feedback.className = 'feedback error';
                feedback.innerHTML = '❌ Почти! Убедись, что используешь теги h1 и p/div';
            }
        }

        function checkCSS() {
            const select = document.getElementById('css-select');
            const feedback = document.getElementById('css-feedback');
            
            if (select.value === "color: blue; text-align: center;") {
                feedback.className = 'feedback success';
                feedback.innerHTML = '🎨 Прекрасно! Страница стала выглядеть намного лучше!';
                setTimeout(() => {
                    currentLevel = 3;
                    showLevel(3);
                    updateProgress();
                }, 1500);
            } else {
                feedback.className = 'feedback error';
                feedback.innerHTML = '🎨 Не совсем... Попробуй сделать заголовок синим и выровнять по центру';
            }
        }

        function checkJS() {
            const input = document.getElementById('js-input').value.toLowerCase();
            const feedback = document.getElementById('js-feedback');
            
            if (input.includes('alert') || input.includes('изменить') || input.includes('change')) {
                feedback.className = 'feedback success';
                feedback.innerHTML = '⚡ Удивительно! JavaScript оживил твою страницу!';
                setTimeout(() => {
                    currentLevel = 4;
                    showLevel(4);
                    updateProgress();
                }, 1500);
            } else {
                feedback.className = 'feedback error';
                feedback.innerHTML = '⚡ Интересная идея, но попробуй добавить всплывающее окно или изменить содержимое страницы';
            }
        }

        function checkCombined() {
            const feedback = document.getElementById('combined-feedback');
            
            feedback.className = 'feedback success';
            feedback.innerHTML = '🔗 Идеально! Ты создал полноценный интерактивный элемент!';
            
            setTimeout(() => {
                document.getElementById('completion').style.display = 'block';
                document.querySelectorAll('.challenge').forEach(challenge => {
                    challenge.style.display = 'none';
                });
                createConfetti();
            }, 2000);
        }

        function showHint(level) {
            const feedback = document.getElementById('combined-feedback');
            feedback.className = 'feedback success';
            feedback.innerHTML = '💡 Подсказка: Нужно добавить обработчики событий для кнопок, которые изменяют переменную count и обновляют текст в span';
        }

        function restartQuest() {
            currentLevel = 1;
            updateProgress();
            showLevel(1);
            document.getElementById('completion').style.display = 'none';
            
            // Сброс всех полей ввода
            document.getElementById('html-input').value = '';
            document.getElementById('css-select').selectedIndex = 0;
            document.getElementById('js-input').value = '';
        }

        // Инициализация
        updateProgress();
