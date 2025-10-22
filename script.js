   // Глобальные переменные
        let currentLevel = 1;
        const totalLevels = 4;

        // Функция для обработки нажатия Enter
        function handleEnter(event, checkFunction) {
            if (event.key === 'Enter') {
                checkFunction();
            }
        }

        // Обновление прогресс-бара
        function updateProgress() {
            const progress = ((currentLevel - 1) / totalLevels) * 100;
            document.getElementById('progress').style.width = progress + '%';
        }

        // Показать уровень
        function showLevel(level) {
            document.querySelectorAll('.challenge').forEach(challenge => {
                challenge.classList.remove('active');
            });
            const challengeElement = document.getElementById(`challenge-${level}`);
            if (challengeElement) {
                challengeElement.classList.add('active');
            }
        }

        // Проверка HTML
        function checkHTML() {
            const input = document.getElementById('html-input');
            const feedback = document.getElementById('html-feedback');
            
            if (!input) {
                console.error('HTML input not found');
                return;
            }
            
            const value = input.value.toLowerCase();
            
            if (value.includes('<h1>') && value.includes('</h1>') && 
                (value.includes('<p>') || value.includes('<div>'))) {
                feedback.className = 'feedback success';
                feedback.innerHTML = '✅ Отлично! Ты создал правильную структуру HTML!';
                setTimeout(() => {
                    currentLevel = 2;
                    showLevel(2);
                    updateProgress();
                }, 1500);
            } else {
                feedback.className = 'feedback error';
                feedback.innerHTML = '❌ Почти! Убедись, что используешь теги h1 и p/div. Пример: &lt;h1&gt;Заголовок&lt;/h1&gt;&lt;p&gt;Текст&lt;/p&gt;';
            }
        }

        // Проверка CSS
        function checkCSS() {
            const select = document.getElementById('css-select');
            const feedback = document.getElementById('css-feedback');
            
            if (!select) {
                console.error('CSS select not found');
                return;
            }
            
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

        // Проверка JavaScript
        function checkJS() {
            const input = document.getElementById('js-input');
            const feedback = document.getElementById('js-feedback');
            
            if (!input) {
                console.error('JS input not found');
                return;
            }
            
            const value = input.value.toLowerCase();
            
            if (value.includes('alert') || value.includes('изменить') || value.includes('change') || 
                value.includes('console.log') || value.includes('document')) {
                feedback.className = 'feedback success';
                feedback.innerHTML = '⚡ Удивительно! JavaScript оживил твою страницу!';
                setTimeout(() => {
                    currentLevel = 4;
                    showLevel(4);
                    updateProgress();
                }, 1500);
            } else {
                feedback.className = 'feedback error';
                feedback.innerHTML = '⚡ Интересная идея, но попробуй добавить всплывающее окно или изменить содержимое страницы. Пример: alert("Привет!")';
            }
        }

        // Проверка комбинированного задания
        function checkCombined() {
            const feedback = document.getElementById('combined-feedback');
            
            feedback.className = 'feedback success';
            feedback.innerHTML = '🔗 Идеально! Ты создал полноценный интерактивный элемент!';
            
            setTimeout(() => {
                document.getElementById('completion').style.display = 'block';
                document.querySelectorAll('.challenge').forEach(challenge => {
                    challenge.style.display = 'none';
                });
            }, 2000);
        }

        // Показать подсказку
        function showHint(level) {
            const feedback = document.getElementById('combined-feedback');
            feedback.className = 'feedback success';
            feedback.innerHTML = '💡 Подсказка: Нужно добавить обработчики событий для кнопок, которые изменяют переменную count и обновляют текст в span. Пример: document.getElementById("increase").addEventListener("click", function() { count++; document.getElementById("count").textContent = count; })';
        }

        // Перезапуск квеста
        function restartQuest() {
            currentLevel = 1;
            updateProgress();
            showLevel(1);
            document.getElementById('completion').style.display = 'none';
            
            // Сброс всех полей ввода
            const htmlInput = document.getElementById('html-input');
            const cssSelect = document.getElementById('css-select');
            const jsInput = document.getElementById('js-input');
            
            if (htmlInput) htmlInput.value = '';
            if (cssSelect) cssSelect.selectedIndex = 0;
            if (jsInput) jsInput.value = '';
            
            // Сброс фидбека
            document.querySelectorAll('.feedback').forEach(feedback => {
                feedback.style.display = 'none';
            });
            
            // Показать все вызовы
            document.querySelectorAll('.challenge').forEach(challenge => {
                challenge.style.display = 'block';
            });
        }

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            updateProgress();
            console.log('Квест инициализирован!');
        });
