<!-- Catalogue Hero -->
<section class="catalogue-hero">
  <div class="container hero-content">
    <h1>Our Catalogue</h1>
    <p>Discover timeless essentials crafted for confidence and elegance.</p>
  </div>
</section>

<!-- Image Gallery -->
<section class="catalogue-gallery">
  <div class="container gallery-grid">
    <?php
      for ($i = 1; $i <= 11; $i++) {
        echo '
        <div class="gallery-item">
          <img src="/double-barrel-jeans/assets/images/img_' . $i . '.png" alt="Catalogue Item ' . $i . '" onclick="openModal(this)">
        </div>';
      }
    ?>
  </div>
</section>

<!-- Modal -->
<div id="imageModal" class="modal">
  <span class="close" onclick="closeModal()">&times;</span>
  <img class="modal-content" id="modalImage">
</div>
