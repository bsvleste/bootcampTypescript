import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);
    const findAppointmentSameDate = await appointmentRepository.findByDate(
      appointmentDate,
    );
    if (findAppointmentSameDate) {
      throw Error('this appointment is alredy booked');
    }
    const appointment = appointmentRepository.create({
      provider_id,
      date: appointmentDate,
    });
    await appointmentRepository.save(appointment);
    return appointment;
  }
}
export default CreateAppointmentService;
