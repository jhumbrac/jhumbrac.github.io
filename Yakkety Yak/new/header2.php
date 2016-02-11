<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>
		<link href="//www.google-analytics.com" rel="dns-prefetch">
		<link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
		<link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
		<link href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css" rel="stylesheet">
		<link href="<?php echo get_template_directory_uri(); ?>/fonts/flaticon.css" rel="stylesheet" type="text/css"> 
		<meta charset="<?php bloginfo('charset'); ?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header clear" role="banner">

					<!-- logo -->
					<a href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Logo" class="logo-img"></a>
					<!-- /logo -->

					<!-- nav -->
					<nav class="nav" role="navigation">
						<div>
							<a href="#" target="_blank"><i class="flaticon-facebook2"></i></a>
							<a href="#" target="_blank"><i class="flaticon-google-plus"></i></a>
							<a href="#" target="_blank"><i class="flaticon-twitter"></i></a>
							<a href="tel:16157421775"><i class="flaticon-phone21"></i>(615) 742 - 1775</a>
						</div>
						<?php html5blank_nav(); ?>
					</nav>
					<!-- /nav -->

			</header>
			<aside id="submissionForm">
				<h2><i class="flaticon-email5"></i>Submit Your Case</h2>
				<div>
					<h3>Have a legal question or want to learn if you have a case?</h3>
					<p>Please fill out the form below, and we will get back to you as soon as we are able</p>
					<?php echo do_shortcode('[contact-form-7 id="3057" title="Case submission"]'); ?>
				</div>
			</aside>	