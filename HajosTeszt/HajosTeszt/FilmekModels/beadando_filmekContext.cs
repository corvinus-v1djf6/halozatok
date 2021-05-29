using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.FilmekModels
{
    public partial class beadando_filmekContext : DbContext
    {
        public beadando_filmekContext()
        {
        }

        public beadando_filmekContext(DbContextOptions<beadando_filmekContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Filmek> Filmeks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=balazsgepe.database.windows.net;Initial Catalog=beadando_filmek;User ID=V1DJF6;Password=BALazs2020");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Filmek>(entity =>
            {
                entity.ToTable("Filmek");

                entity.Property(e => e.FilmekId).HasColumnName("filmek_id");

                entity.Property(e => e.FilmCime)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("film_cime");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
