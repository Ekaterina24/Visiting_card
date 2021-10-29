<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Статьи</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/article.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
</head>
<body>
<div class="main">
    <header class="header1">
        <div class="container">
            <a href="index.php" class="main-img">
                <img src="images/Bez_imeni-1 1.svg" alt="icon">
            </a>

            <div class="menu">
                <a class="main__menu__item" href="index.php#main">Главная</a>
                <a class="main__menu__item" href="index.php#services">Услуги</a>
                <a class="main__menu__item" href="index.php#about-us">О нас</a>
                <a class="main__menu__item" href="index.php#projects">Наши проекты</a>
                <a class="main__menu__item" href="index.php#reviews">Отзывы</a>
                <a class="main__menu__item" href="index.php#articles">Статьи</a>
                <a class="main__menu__item" href="index.php#contacts">Контакты</a>

                <div class="main__phone">
                    <a href="#">+7(987)234-65-98</a>
                    <a href="#">+7(987)234-65-98</a>
                </div>
            </div>

        </div>

    </header>

    <header class="header2">
        <div class="container">
            <div class="main-menu">
                <a href="index.php" class="main-img">
                    <img src="images/Bez_imeni-1 1.svg" alt="icon">
                </a>

                <div class="menu__icon">
                    <span></span>
                </div>
            </div>

            <div class="menu__body">
                <div class="menu-list">
                    <a data-goto="index.php#main" class="main__menu__item" href="#">Главная</a>
                    <a data-goto="index.php#services" class="main__menu__item" href="#">Услуги</a>
                    <a data-goto="index.php#about-us" class="main__menu__item" href="#">О нас</a>
                    <a data-goto="index.php#projects" class="main__menu__item" href="#">Наши проекты</a>
                    <a data-goto="index.php#reviews" class="main__menu__item" href="#">Отзывы</a>
                    <a data-goto="index.php#articles" class="main__menu__item" href="#">Статьи</a>
                    <a data-goto="index.php#contacts" class="main__menu__item" href="#">Контакты</a>
                </div>

                <div class="main__phone">
                    <a href="#">+7(987)234-65-98</a>
                    <a href="#">+7(987)234-65-98</a>
                </div>
            </div>

        </div>

    </header>

    <div class="info" id="main">
        <div class="container--info">
            <span>Передовая IT студия</span>
            <h1>Мы создаем легкие решения
                сложных задач и проблем</h1>
            <a data-goto="#projects" class="main__menu__item" href="index.php#projects">Наши проекты</a>

        </div>
    </div>


</div>

<div class="fon"></div>
    <?php
    $connection = mysqli_connect('std-mysql:3306', 'std_1357_articles', '12345678', 'std_1357_articles');
    if($connection == false) {
        echo "Error!";
        echo mysqli_connect_errno();
        exit();
    }
    $result = $_GET['id'];
    $query = mysqli_query($connection, "SELECT * from articles WHERE id=$result");
    $article = mysqli_fetch_assoc($query);
    ?>
<div class="one-article">
    <div class="container-article">
        <h3 id="one"><?php echo $article['name'] ?></h3>
        <p class="text"><?php echo $article['text'] ?></p>
        <p>Дата публикации: <?php echo $article['created_at'] ?></p>
        <div class="articles__article__author">
            <?php echo $article['name_author'] ?>, <span><?php echo $article['company'] ?></span>
        </div>
        <div class="button">
            <a class="back" href="index.php#articles">Назад</a>
        </div>
    </div>
</div>
<script src="js/second.js"></script>
</body>
</html>
