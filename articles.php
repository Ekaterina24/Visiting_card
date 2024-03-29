<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Статьи</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/links.css" />
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
            <a data-goto="index.php#projects" class="main__menu__item" href="#">Наши проекты</a>

        </div>
    </div>


</div>

<div class="fon"></div>
<div id="all" class="articles-container">
<?php
$connection = mysqli_connect('std-mysql:3306', 'std_1357_articles', '12345678', 'std_1357_articles');
if($connection == false) {
    echo "Error!";
    echo mysqli_connect_errno();
    exit();
}

if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 1;
}

$notesOnPage = 3;
$from = ($page - 1) * $notesOnPage;
$count_query = mysqli_query($connection, "SELECT COUNT(*) from articles");
$count_array = $count_query->fetch_array(MYSQLI_NUM);
$count = $count_array[0];
$lenght = ceil($count / $notesOnPage);

$query = mysqli_query($connection, "SELECT * from articles WHERE id > 0 LIMIT $from, $notesOnPage");

function Pagination($lenght, $page) {
    if ($lenght < 5) {
        foreach (range(1, $lenght) as $p) echo '<a class="number" href="?page='.$p.'#all">'.$p.'</a>';
    }

    if ($lenght > 4 && $page < 5) {
        foreach (range(1, 5) as $p) echo '<a class="number" href="?page='.$p.'#all">'.$p.'</a>';
    }

    if ($lenght - 5 < 5 && $page > 5) {
        foreach (range($lenght - 4, $lenght) as $p) echo '<a class="number" href="?page='.$p.'#all">'.$p.'</a>';
    }

    if ($lenght > 4 && $lenght - 5 < 5 && $page == 5) {
        foreach (range($page - 2, $lenght) as $p) echo '<a class="number" href="?page='.$p.'#all">'.$p.'</a>';
    }

    if ($lenght > 4 && $lenght - 5 > 5 && $page >= 5 && $page <= $lenght - 4) {
        foreach (range($page - 2, $page + 2) as $p) echo '<a class="number" href="?page='.$p.'#all">'.$p.'</a>';
    }

    if ($lenght > 4 && $lenght - 5 > 5 && $page > $lenght - 4) {
        foreach (range($lenght - 4, $lenght) as $p) echo '<a class="number" href="?page='.$p.'#all">'.$p.'</a>';
    }
}
while ($article = mysqli_fetch_assoc($query)){?>
        <div>
            <div class="articles__text">
                <div class="articles__text__title">
                    <img src="images/points.svg" alt="points">
                    <h3><?php echo $article['name'] ?></h3>
                </div>
                <p class="first-text"><?php echo $article['first_text'] ?></p>
                <p>Дата публикации: <?php echo $article['created_at'] ?></p>
                <div class="wrapper-more">
                    <div class="more">
                        <a href="/article2.php?id=<?php echo $article['id'] ?>#one">Подробнее</a>
                    </div>
                </div>
            </div>
            <div class="articles__article__author">
                <?php echo $article['name_author'] ?>, <span><?php echo $article['company'] ?></span>
            </div>
        </div>
<?php } ?>
</div>
<div class="pagin">
    <?php Pagination($lenght, $page); ?>
</div>
<script src="js/second.js"></script>
</body>
</html>

