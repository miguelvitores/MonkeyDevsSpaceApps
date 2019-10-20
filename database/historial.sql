use monkeydevs;
insert into hilo(titulo, comunidad) values("Cádiz arde fuertemente", "Andalucía");
insert into hilo(titulo, comunidad) values("Medina del Campo arde fuertemente", "Castilla y León");
select * from hilo;

insert into comentario(texto, Hilo_idHilo) values("Me quemo", 1);
insert into comentario(texto, Hilo_idHilo) values("Ya te apago yo", 1);

select * from comentario;


drop database monkeydevs;